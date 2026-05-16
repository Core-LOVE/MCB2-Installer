package net.katebulka.installer.integration.actions;

import de.keksuccino.fancymenu.customization.action.Action;
import net.katebulka.installer.installer;
import net.katebulka.installer.integration.placeholders.DownloadLogPlaceholder;
import net.minecraft.client.Minecraft;
import net.minecraft.network.chat.Component;
import net.neoforged.fml.loading.FMLPaths;
import org.apache.commons.io.FileUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.net.URI;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class InstallModsAction extends Action {
    public InstallModsAction() {
        super("install_mods");
    }

    @Override
    public boolean hasValue() {
        return true;
    }

    private static void afterDownload() throws IOException {
        FileUtils.deleteDirectory(new File(FMLPaths.GAMEDIR.get() + "/install_output/data_packs"));
        FileUtils.deleteDirectory(new File(FMLPaths.GAMEDIR.get() + "/install_output/resourcepacks"));

        if (Files.notExists(Paths.get(FMLPaths.GAMEDIR.get() + ".DEV"))) {
            installer.LOGGER.info("Moving downloaded resources, no .DEV...");
            DownloadLogPlaceholder.LOG = "Moving downloaded resources...";


            ProcessBuilder process = new ProcessBuilder(
                    "java", "-jar", FMLPaths.GAMEDIR.get() + "/finish_installation.jar",
                    FMLPaths.GAMEDIR.get().toString()
            );

            process.inheritIO();
            Process real_process = process.start();

            Minecraft.getInstance().stop();
        }
    }

    @Override
    public void execute(@Nullable String value) {
//        Path startPath = Paths.get(FMLPaths.GAMEDIR.get() + "/install_data");
//
//        DownloadLogPlaceholder.LOG = "Loading Assets...";
//
//        try (Stream<Path> paths = Files.walk(startPath)) {
//            paths.filter(Files::isRegularFile)
//                .forEach(path -> {
//                    String fileName = path.getFileName().toString();
//
//                    if(fileName.contains(".asset")) {
//                        String newName = fileName.replace(fileName, fileName.replace(".asset", ".pw.toml"));
//
//                        DownloadLogPlaceholder.LOG = fileName + " > " + newName;
//
//                        try {
//                            Files.move(path, path.resolveSibling(newName));
//                            installer.LOGGER.info(fileName, newName);
//                        } catch (IOException e) {
//                            installer.LOGGER.info(e.getMessage());
//                        }
//                    }
//                });
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

        try {
            Path path = Paths.get(FMLPaths.GAMEDIR.get() + "/install_data/pack.toml");
            URI uri = path.toUri();
            String url = uri.toString();

            ProcessBuilder process;

            if (!value.contains("server")) {
                process = new ProcessBuilder(
                        "java", "-jar", FMLPaths.GAMEDIR.get() + "/install_data/packwiz-installer-bootstrap.jar",
                        "-g", url
                );
            } else {
                process = new ProcessBuilder(
                        "java", "-jar", FMLPaths.GAMEDIR.get() + "/install_data/packwiz-installer-bootstrap.jar",
                        "-g", "-s", "server", url
                );
            }

            process.directory(new File(FMLPaths.GAMEDIR.get() + "/install_output"));

//            process.inheritIO();
            Process real_process = process.start();

            Thread output_thread = new Thread(() -> {
                try (BufferedReader reader = new BufferedReader(
                        new InputStreamReader(real_process.getInputStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        installer.LOGGER.info(line);
                        DownloadLogPlaceholder.LOG = line;

                        if (line.contains("Finished successfully!")) {
                            afterDownload();
                            return;
                        }
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            Thread error_thread = new Thread(() -> {
                try (BufferedReader reader = new BufferedReader(
                        new InputStreamReader(real_process.getErrorStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        installer.LOGGER.info(line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            output_thread.start();
            error_thread.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public @NotNull Component getDisplayName() {
        return Component.literal("Install Modpack Files");
    }

    @Override
    public @NotNull Component getDescription() {
        return Component.literal("");
    }

    @Override
    public @Nullable Component getValueDisplayName() {
        return Component.literal("");
    }

    @Override
    public @Nullable String getValuePreset() {
        return "";
    }
}

package net.katebulka.installer.integration.actions;

import de.keksuccino.fancymenu.customization.action.Action;
import net.katebulka.installer.installer;
import net.katebulka.installer.integration.placeholders.DownloadLogPlaceholder;
import net.minecraft.network.chat.Component;
import net.neoforged.fml.loading.FMLPaths;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;

public class InstallModsAction extends Action {
    public InstallModsAction() {
        super("install_mods");
    }

    @Override
    public boolean hasValue() {
        return false;
    }

    @Override
    public void execute(@Nullable String s) {
        try {
            Path path = Paths.get(FMLPaths.GAMEDIR.get() + "/install_data/pack.toml");
            URI uri = path.toUri();
            String url = uri.toString();

            ProcessBuilder process = new ProcessBuilder(
                    "java", "-jar", FMLPaths.GAMEDIR.get() + "/install_data/packwiz-installer-bootstrap.jar",
                    "-g", url
            );

//            process.inheritIO();
            Process real_process = process.start();

            Thread output_thread = new Thread(() -> {
                try (BufferedReader reader = new BufferedReader(
                        new InputStreamReader(real_process.getInputStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        installer.LOGGER.info(line);
                        DownloadLogPlaceholder.LOG = line;
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

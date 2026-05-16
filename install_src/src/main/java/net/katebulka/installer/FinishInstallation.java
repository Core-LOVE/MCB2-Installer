package net.katebulka.installer;

import java.io.File;
import java.nio.file.*;

public class FinishInstallation {
    public static boolean deleteDirectory(File directory) {
        File[] allContents = directory.listFiles();

        if (allContents != null) {
            for (File file : allContents) {
                deleteDirectory(file);
            }
        }

        return directory.delete();
    }

    public static void main(String[] args) throws Exception {
        if (args.length > 0) {
            String gamepath = args[0];

            deleteDirectory(new File(gamepath + "/mods"));
            deleteDirectory(new File(gamepath + "/config"));
            deleteDirectory(new File(gamepath + "/install_data"));
            deleteDirectory(new File(gamepath + "/fancymenu_data"));

            Path from = Paths.get(gamepath + "/install_output");
            Path destination = Path.of(gamepath);

            try (DirectoryStream<Path> stream = Files.newDirectoryStream(from)) {
                for (Path entry : stream) {
                    if (Files.isDirectory(entry)) {
                        Files.move(entry, destination, StandardCopyOption.REPLACE_EXISTING);
                    }
                }
            }

            deleteDirectory(new File(gamepath + "/install_output"));
        }
    }
}

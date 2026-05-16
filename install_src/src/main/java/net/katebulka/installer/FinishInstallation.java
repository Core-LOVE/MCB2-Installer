package net.katebulka.installer;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    private static void copyContents(Path source, Path destination) throws IOException {
        try (Stream<Path> walk = Files.walk(source)) {
            for (Path sourcePath : walk.collect(Collectors.toList())) {
                Path relativePath = source.relativize(sourcePath);
                Path destPath = destination.resolve(relativePath);
                if (Files.isDirectory(sourcePath)) {
                    Files.createDirectories(destPath);
                } else {
                    Files.copy(sourcePath, destPath, StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }
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
                for (Path sourceSubdir : stream) {
                    if (Files.isDirectory(sourceSubdir)) {
                        String folderName = sourceSubdir.getFileName().toString();
                        Path targetDir = Path.of(gamepath, folderName);

                        Files.createDirectories(targetDir);
                        copyContents(sourceSubdir, targetDir);
                    }
                }
            }

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

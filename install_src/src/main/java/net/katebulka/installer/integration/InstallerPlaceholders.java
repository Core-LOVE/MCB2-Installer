package net.katebulka.installer.integration;

import de.keksuccino.fancymenu.customization.placeholder.PlaceholderRegistry;
import de.keksuccino.fancymenu.customization.placeholder.placeholders.Placeholders;
import de.keksuccino.fancymenu.customization.placeholder.placeholders.client.MinecraftVersionPlaceholder;
import net.katebulka.installer.integration.placeholders.DownloadLogPlaceholder;

public class InstallerPlaceholders {
    public static final DownloadLogPlaceholder DOWNLOAD_LOG_PLACEHOLDER = new DownloadLogPlaceholder();

    public static void init() {
        PlaceholderRegistry.register(DOWNLOAD_LOG_PLACEHOLDER);
    }
}

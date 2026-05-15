package net.katebulka.installer.integration.placeholders;

import de.keksuccino.fancymenu.customization.placeholder.DeserializedPlaceholderString;
import de.keksuccino.fancymenu.customization.placeholder.Placeholder;
import de.keksuccino.fancymenu.customization.screen.identifier.ScreenIdentifierHandler;
import de.keksuccino.fancymenu.util.LocalizationUtils;
import net.minecraft.client.Minecraft;
import net.minecraft.client.multiplayer.ClientLevel;
import net.minecraft.client.resources.language.I18n;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class DownloadLogPlaceholder extends Placeholder {
    private static final Logger LOGGER = LogManager.getLogger();
    public static String LOG = "Waiting...";

    public DownloadLogPlaceholder() {
        super("modpack_download_log");
    }

    @Override
    public String getReplacementFor(DeserializedPlaceholderString dps) {
        try {
            return LOG;
        } catch (Exception ex) {
            LOGGER.error("[FANCYMENU] Failed to get replacement for '" + this.getIdentifier() + "' placeholder.", ex);
        }

        return "0";
    }

    @Override
    public @Nullable List<String> getValueNames() {
        return List.of();
    }

    @Override
    public @NotNull String getDisplayName() {
        return "Download Log";
    }

    @Override
    public @Nullable List<String> getDescription() {
        return List.of("Desc");
    }

    @Override
    public String getCategory() {
        return "nope";
    }

    public boolean canRunAsync() {
        return false;
    }

    @Override
    public @NotNull DeserializedPlaceholderString getDefaultPlaceholderString() {
        return new DeserializedPlaceholderString(this.getIdentifier(), (HashMap)null, "");
    }
}

package net.katebulka.installer.integration;

import de.keksuccino.fancymenu.customization.action.ActionRegistry;
import de.keksuccino.fancymenu.customization.action.actions.Actions;
import de.keksuccino.fancymenu.customization.action.actions.file.DeleteFileAction;
import net.katebulka.installer.integration.actions.InstallModsAction;

public class InstallerActions {
    public static final InstallModsAction INSTALL_MODS_ACTION = new InstallModsAction();

    public static void init() {
//        Actions
        ActionRegistry.register(INSTALL_MODS_ACTION);
    }
}

//// Written By GerldIn2016 \\--
import { Players } from "@rbxts/services";
import { GamepassHandler } from "./gamepassClient";
import { BuildDisplay } from "./LoadoutHandler";
import { MainGUI } from './typeDeclerations';

let init = () => {

    let localPlayer = Players.LocalPlayer
    let GUI = localPlayer.WaitForChild("PlayerGui").WaitForChild("MainGUI")
    if (!(GUI && GUI.IsA("ScreenGui"))) return;
    let MainFrame = <MainGUI>GUI

    // GUI Definitions
    let settingsPage = MainFrame.MovingFrame.Settings
    let homepage = MainFrame.MovingFrame.Home
    let Gamepass = MainFrame.MovingFrame.Shop
    let Info = MainFrame.MovingFrame.Info
    let loadout = MainFrame.MovingFrame.Loadout

    // CHECK THEY EXIST
    if (!(settingsPage && homepage && Gamepass && Info && loadout)) return;

    //Setup GamepassHandler
    GamepassHandler(Gamepass, MainFrame)

    //Setup Uniform Handler
    BuildDisplay(loadout.Grid.Uniform, "Uniforms")
    BuildDisplay(loadout.Grid.Primary, "Primary")
    BuildDisplay(loadout.Grid.Perk, "Perk")
    BuildDisplay(loadout.Grid.zEquipment, "zEquipment`")
    BuildDisplay(loadout.Grid.Secondary, "Secondary")


}

init()
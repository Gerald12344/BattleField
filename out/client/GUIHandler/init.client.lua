-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local Players = TS.import(script, TS.getModule(script, "services")).Players
local GamepassHandler = TS.import(script, script, "gamepassClient").GamepassHandler
local BuildUniform = TS.import(script, script, "LoadoutHandler").BuildUniform
local init = function()
	local localPlayer = Players.LocalPlayer
	local GUI = localPlayer:WaitForChild("PlayerGui"):WaitForChild("MainGUI")
	if not (GUI and GUI:IsA("ScreenGui")) then
		return nil
	end
	local MainFrame = GUI
	-- GUI Definitions
	local settingsPage = MainFrame.MovingFrame.Settings
	local homepage = MainFrame.MovingFrame.Home
	local Gamepass = MainFrame.MovingFrame.Shop
	local Info = MainFrame.MovingFrame.Info
	local loadout = MainFrame.MovingFrame.Loadout
	-- CHECK THEY EXIST
	if not (settingsPage and homepage and Gamepass and Info and loadout) then
		return nil
	end
	-- Setup GamepassHandler
	GamepassHandler(Gamepass, MainFrame)
	-- Setup Uniform Handler
	BuildUniform(MainFrame)
end
init()

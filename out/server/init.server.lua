-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local Players = TS.import(script, TS.getModule(script, "services")).Players
local CheckOwnerShipOfItems = TS.import(script, game:GetService("ServerScriptService"), "Geralds Server", "database").CheckOwnerShipOfItems
local purchaseGamepassHandler = TS.import(script, game:GetService("ServerScriptService"), "Geralds Server", "gamepassHandler").purchaseGamepassHandler
-- Start running misc scripts
purchaseGamepassHandler()
Players.PlayerAdded:Connect(function(plr)
	-- Check OwnerShip of items
	CheckOwnerShipOfItems(plr)
end)

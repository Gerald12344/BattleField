-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local Players = TS.import(script, TS.getModule(script, "services")).Players
local _0 = TS.import(script, game:GetService("ServerScriptService"), "Geralds Server", "database")
local CheckOwnerShip = _0.CheckOwnerShip
local CheckOwnerShipOfItems = _0.CheckOwnerShipOfItems
local purchaseGamepassHandler = TS.import(script, game:GetService("ServerScriptService"), "Geralds Server", "gamepassHandler").purchaseGamepassHandler
-- Start running misc scripts
purchaseGamepassHandler()
CheckOwnerShip()
Players.PlayerAdded:Connect(function(plr)
	-- Check OwnerShip of items
	CheckOwnerShipOfItems(plr)
end)

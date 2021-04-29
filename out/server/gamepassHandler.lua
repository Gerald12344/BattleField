-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local _0 = TS.import(script, TS.getModule(script, "services"))
local MarketplaceService = _0.MarketplaceService
local ReplicatedStorage = _0.ReplicatedStorage
local function purchaseGamepassHandler()
	local _1 = ReplicatedStorage:FindFirstChild("Events")
	if _1 ~= nil then
		_1 = _1:FindFirstChild("PromptPurchase")
	end
	local RemoteEvent = _1
	if not (RemoteEvent and RemoteEvent:IsA("RemoteEvent")) then
		return nil
	end
	RemoteEvent.OnServerEvent:Connect(function(plr, id)
		local _2 = id
		if type(_2) == "number" then
			MarketplaceService:PromptGamePassPurchase(plr, id)
		end
	end)
end
return {
	purchaseGamepassHandler = purchaseGamepassHandler,
}

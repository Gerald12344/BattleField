-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local _0 = TS.import(script, TS.getModule(script, "services"))
local MarketplaceService = _0.MarketplaceService
local ReplicatedStorage = _0.ReplicatedStorage
local GamepassIds = TS.import(script, game:GetService("ReplicatedStorage"), "Modules", "CustomisableConfig").GamepassIds
local ids = GamepassIds()
local function GamepassHandler(shopFrame, GUI)
	local Assets = ReplicatedStorage.Assets
	if not (Assets and Assets:IsA("Folder")) then
		return nil
	end
	local desc = GUI.MovingFrame.Shop.Desc
	local _1 = ids
	local _2 = function(e)
		local element = Assets.GUI.GamepassIcon:Clone()
		element.Image = "rbxassetid://" .. tostring(MarketplaceService:GetProductInfo(e, 2).IconImageAssetId)
		element.Parent = GUI.MovingFrame.Shop.Passes.ScrollingFrame
		element.MouseButton1Down:Connect(function()
			desc.Visible = true
			local data = MarketplaceService:GetProductInfo(e, 2)
			desc.TItle.Text = data.Name
			desc.Description.Text = data.Description
			desc.Purchase.Text = "Purchase " .. tostring(data.PriceInRobux) .. "$"
			desc.ImageLabel.Image = "rbxassetid://" .. tostring(data.IconImageAssetId)
			desc.Purchase.GamePassID.Value = e
		end)
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _3, _4 in ipairs(_1) do
		_2(_4, _3 - 1, _1)
	end
	-- ▲ ReadonlyArray.forEach ▲
	desc.Purchase.MouseButton1Down:Connect(function()
		ReplicatedStorage.Events.PromptPurchase:FireServer(desc.Purchase.GamePassID.Value)
	end)
end
return {
	GamepassHandler = GamepassHandler,
}

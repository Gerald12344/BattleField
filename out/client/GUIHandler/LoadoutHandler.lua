-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local Uniforms = TS.import(script, game:GetService("ReplicatedStorage"), "Modules", "CustomisableConfig").Uniforms
local function BuildDisplay(Frame, typeOfElement)
	local grid = Frame.Items.Padding
	-- Clear all children which should be there
	local _0 = grid:GetChildren()
	local _1 = function(e)
		if not e:IsA("UIGridLayout") then
			e:Destroy()
		end
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _2, _3 in ipairs(_0) do
		_1(_3, _2 - 1, _0)
	end
	-- ▲ ReadonlyArray.forEach ▲
	local _2
	if typeOfElement == "Uniform" then
		_2 = Uniforms
	else
		_2 = Uniforms
	end
	local outputArray = _2
	local _3 = outputArray()
	local _4 = function(element)
		local childClone = ReplicatedStorage.Assets.GUI.ItemFrame:Clone()
		childClone.Parent = grid
		childClone.ViewportFrame.Uniform.Shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" .. tostring(element.Shirt)
		childClone.ViewportFrame.Uniform.Pants.PantsTemplate = "http://www.roblox.com/asset/?id=" .. tostring(element.pants)
		if typeOfElement == "Uniform" then
			local Cover = element.Cover:Clone()
			Cover:SetPrimaryPartCFrame(childClone.ViewportFrame.Uniform.Head.CFrame)
			Cover.Parent = childClone.ViewportFrame.Uniform
		end
		childClone.TextLabel.Text = element.name
		childClone.Level.Text = "LEVEL " .. tostring(element.level) .. "+"
		childClone.Name = tostring(element.UUID)
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _5, _6 in ipairs(_3) do
		_4(_6, _5 - 1, _3)
	end
	-- ▲ ReadonlyArray.forEach ▲
	ReplicatedStorage.Events.ItemOwnsership.OnClientEvent:Connect(function(items, types)
		local _5 = types
		if not (type(_5) == "string") then
			return nil
		end
		if types == typeOfElement then
			local dataIn = items
			local _6 = dataIn
			local _7 = function(element)
				if element.owned == false then
					return nil
				end
				local ITEM = grid:FindFirstChild(element.UUID)
				local _8 = ITEM
				if _8 ~= nil then
					_8 = _8:FindFirstChild("TextLabel")
				end
				local TextLabel = _8
				local _9 = ITEM
				if _9 ~= nil then
					_9 = _9:FindFirstChild("Level")
				end
				local LevelReq = _9
				local _10 = ITEM
				if _10 ~= nil then
					_10 = _10:FindFirstChild("ViewportFrame")
				end
				local Image = _10
				if TextLabel and TextLabel:IsA("TextLabel") and LevelReq and Image and LevelReq:IsA("TextLabel") and Image:IsA("ViewportFrame") then
					TextLabel.TextTransparency = 0
					LevelReq.TextTransparency = 0
					Image.ImageTransparency = 0
				end
			end
			-- ▼ ReadonlyArray.forEach ▼
			for _8, _9 in ipairs(_6) do
				_7(_9, _8 - 1, _6)
			end
			-- ▲ ReadonlyArray.forEach ▲
		end
	end)
end
return {
	BuildDisplay = BuildDisplay,
}

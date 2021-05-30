-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local _0 = TS.import(script, TS.getModule(script, "services"))
local Players = _0.Players
local ReplicatedStorage = _0.ReplicatedStorage
local getSettings = TS.import(script, game:GetService("ReplicatedStorage"), "Modules", "CustomisableConfig").getSettings
local SetupClickHandlerForLoadout = TS.import(script, script.Parent, "ClickLoadoutItem").SetupClickHandlerForLoadout
local function BuildDisplay(Frame, typeOfElement)
	local grid = Frame.Items.Padding
	-- Clear all children which should be there
	local _1 = grid:GetChildren()
	local _2 = function(e)
		if not e:IsA("UIGridLayout") then
			e:Destroy()
		end
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _3, _4 in ipairs(_1) do
		_2(_4, _3 - 1, _1)
	end
	-- ▲ ReadonlyArray.forEach ▲
	local outputArray = getSettings(typeOfElement)
	local _3 = outputArray
	local _4 = function(element)
		local childClone
		if typeOfElement == "Uniforms" and element.Cover ~= nil then
			childClone = ReplicatedStorage.Assets.GUI.ItemFrame:Clone()
			childClone.Parent = grid
			childClone.ViewportFrame.Uniform.Shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" .. tostring(element.Shirt)
			childClone.ViewportFrame.Uniform.Pants.PantsTemplate = "http://www.roblox.com/asset/?id=" .. tostring(element.pants)
			local Cover = element.Cover:Clone()
			Cover:SetPrimaryPartCFrame(childClone.ViewportFrame.Uniform.Head.CFrame)
			Cover.Parent = childClone.ViewportFrame.Uniform
			childClone.TextLabel.Text = element.name
			childClone.Level.Text = "LEVEL " .. tostring(element.level) .. "+"
			childClone.Name = tostring(element.UUID)
		elseif (typeOfElement == "Primary" or typeOfElement == "Secondary") and element.Tool ~= nil then
			childClone = ReplicatedStorage.Assets.GUI.ToolFrame:Clone()
			childClone.Parent = grid
			local Weapon = element.Tool:Clone()
			local _5 = Weapon
			local _6 = (CFrame.new(0, 0, 0))
			local _7 = CFrame.Angles(0, math.rad(0), 0)
			_5:SetPrimaryPartCFrame((_6 * _7):Inverse())
			Weapon.Parent = childClone.ViewportFrame
			Weapon.Name = "Tool"
			childClone.TextLabel.Text = element.name
			childClone.Level.Text = "LEVEL " .. tostring(element.level) .. "+"
			childClone.Name = tostring(element.UUID)
		else
			childClone = ReplicatedStorage.Assets.GUI.ToolFrame:Clone()
			childClone.Parent = grid
			childClone.TextLabel.Text = element.name
			childClone.Level.Text = "LEVEL " .. tostring(element.level) .. "+"
			childClone.Name = tostring(element.UUID)
		end
		local _5 = element.group
		if _5 ~= 0 and _5 == _5 and _5 then
			_5 = element.rank
			if _5 ~= 0 and _5 == _5 and _5 then
				_5 = element.group ~= -1 and Players.LocalPlayer:GetRankInGroup(element.group) >= element.rank
			end
		end
		if _5 ~= 0 and _5 == _5 and _5 then
			childClone.Icon.Visible = false
			childClone.TextLabel.TextTransparency = 0
			childClone.Level.TextTransparency = 0
			childClone.ViewportFrame.ImageTransparency = 0
		end
		childClone.TextButton.MouseButton1Down:Connect(function()
			SetupClickHandlerForLoadout(element, Frame, typeOfElement)
		end)
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
		local dataIn = items
		local _6 = dataIn
		local _7 = function(element)
			if element.owned == false then
				return nil
			end
			print(element.UUID)
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
			local _11 = ITEM
			if _11 ~= nil then
				_11 = _11:FindFirstChild("Icon")
			end
			local PadlocItem = _11
			if TextLabel and TextLabel:IsA("TextLabel") and LevelReq and Image and LevelReq:IsA("TextLabel") and Image:IsA("ViewportFrame") and PadlocItem and PadlocItem:IsA("ImageLabel") then
				TextLabel.TextTransparency = 0
				LevelReq.TextTransparency = 0
				Image.ImageTransparency = 0
				PadlocItem.Visible = false
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _8, _9 in ipairs(_6) do
			_7(_9, _8 - 1, _6)
		end
		-- ▲ ReadonlyArray.forEach ▲
	end)
end
return {
	BuildDisplay = BuildDisplay,
}

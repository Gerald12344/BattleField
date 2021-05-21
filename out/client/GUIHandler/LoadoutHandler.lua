-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local getSettings = TS.import(script, game:GetService("ReplicatedStorage"), "Modules", "CustomisableConfig").getSettings
local SetupClickHandlerForLoadout = TS.import(script, script.Parent, "ClickLoadoutItem").SetupClickHandlerForLoadout
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
	local outputArray = getSettings(typeOfElement)
	local _2 = outputArray
	local _3 = function(element)
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
			local _4 = Weapon
			local _5 = (CFrame.new(0, 0, 0))
			local _6 = CFrame.Angles(0, math.rad(0), 0)
			_4:SetPrimaryPartCFrame((_5 * _6):Inverse())
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
		childClone.MouseButton1Down:Connect(function()
			SetupClickHandlerForLoadout(element, Frame, typeOfElement)
		end)
	end
	-- ▼ ReadonlyArray.forEach ▼
	for _4, _5 in ipairs(_2) do
		_3(_5, _4 - 1, _2)
	end
	-- ▲ ReadonlyArray.forEach ▲
	ReplicatedStorage.Events.ItemOwnsership.OnClientEvent:Connect(function(items, types)
		print("herereerr")
		print(types)
		print(typeOfElement)
		local _4 = types
		if not (type(_4) == "string") then
			return nil
		end
		if types == typeOfElement then
			local dataIn = items
			local _5 = dataIn
			local _6 = function(element)
				if element.owned == false then
					return nil
				end
				print(element.UUID)
				local ITEM = grid:FindFirstChild(element.UUID)
				local _7 = ITEM
				if _7 ~= nil then
					_7 = _7:FindFirstChild("TextLabel")
				end
				local TextLabel = _7
				local _8 = ITEM
				if _8 ~= nil then
					_8 = _8:FindFirstChild("Level")
				end
				local LevelReq = _8
				local _9 = ITEM
				if _9 ~= nil then
					_9 = _9:FindFirstChild("ViewportFrame")
				end
				local Image = _9
				local _10 = ITEM
				if _10 ~= nil then
					_10 = _10:FindFirstChild("Icon")
				end
				local PadlocItem = _10
				if TextLabel and TextLabel:IsA("TextLabel") and LevelReq and Image and LevelReq:IsA("TextLabel") and Image:IsA("ViewportFrame") and PadlocItem and PadlocItem:IsA("ImageLabel") then
					TextLabel.TextTransparency = 0
					LevelReq.TextTransparency = 0
					Image.ImageTransparency = 0
					PadlocItem.Visible = false
				end
			end
			-- ▼ ReadonlyArray.forEach ▼
			for _7, _8 in ipairs(_5) do
				_6(_8, _7 - 1, _5)
			end
			-- ▲ ReadonlyArray.forEach ▲
		end
	end)
end
return {
	BuildDisplay = BuildDisplay,
}

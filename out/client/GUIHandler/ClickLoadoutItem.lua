-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local function SetupClickHandlerForLoadout(item, GUIFrame, typeInput)
	local frame = GUIFrame.ViewportFrame
	local owned = ReplicatedStorage.Events.CheckOwnership:InvokeServer(item.UUID)
	local _0 = owned
	if not (type(_0) == "boolean") then
		return nil
	end
	print(owned)
	if not owned then
		return nil
	end
	if typeInput == "Uniforms" then
		local hum = frame:FindFirstChildOfClass("Model")
		local _1 = hum
		if _1 ~= nil then
			_1 = _1:FindFirstChildOfClass("Shirt")
		end
		local shirt = _1
		local _2 = hum
		if _2 ~= nil then
			_2 = _2:FindFirstChildOfClass("Pants")
		end
		local pants = _2
		local _3 = hum
		if _3 ~= nil then
			_3 = _3:FindFirstChild("Head")
		end
		local head = _3
		if shirt and pants and hum and head and head:IsA("Part") then
			shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" .. tostring(item.Shirt)
			pants.PantsTemplate = "http://www.roblox.com/asset/?id=" .. tostring(item.pants)
			local coverItem = item.Cover
			if not coverItem then
				return nil
			end
			local cover = coverItem:Clone()
			local _4 = hum:GetChildren()
			local _5 = function(e)
				if e:IsA("Model") then
					e:Destroy()
				end
			end
			-- ▼ ReadonlyArray.forEach ▼
			for _6, _7 in ipairs(_4) do
				_5(_7, _6 - 1, _4)
			end
			-- ▲ ReadonlyArray.forEach ▲
			cover.Parent = hum
			local middle = cover:FindFirstChild("Middle")
			if middle and middle:IsA("BasePart") then
				cover.PrimaryPart = middle
				cover:SetPrimaryPartCFrame(head.CFrame)
			end
		end
	end
end
return {
	SetupClickHandlerForLoadout = SetupClickHandlerForLoadout,
}

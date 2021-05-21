-- Compiled with roblox-ts v1.1.1
-- // Written By GerldIn2016 \\--
local function SetupClickHandlerForLoadout(item, GUIFrame, typeInput)
	print("here")
	local frame = GUIFrame.ViewportFrame
	if typeInput == "Uniforms" then
		local hum = frame:FindFirstChildOfClass("Model")
		local _0 = hum
		if _0 ~= nil then
			_0 = _0:FindFirstAncestorOfClass("Shirt")
		end
		local shirt = _0
		local _1 = hum
		if _1 ~= nil then
			_1 = _1:FindFirstAncestorOfClass("Pants")
		end
		local pants = _1
		local _2 = hum
		if _2 ~= nil then
			_2 = _2:FindFirstChild("Head")
		end
		local head = _2
		if shirt and pants and hum and head and head:IsA("Part") then
			shirt.ShirtTemplate = "http://www.roblox.com/asset/?id=" .. tostring(item.Shirt)
			pants.PantsTemplate = "http://www.roblox.com/asset/?id=" .. tostring(item.pants)
			local _3 = item.Cover
			if _3 ~= nil then
				_3 = _3:Clone()
			end
			local cover = _3
			if not cover then
				return nil
			end
			cover.Parent = hum
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
			cover:SetPrimaryPartCFrame(head.CFrame)
		end
	end
end
return {
	SetupClickHandlerForLoadout = SetupClickHandlerForLoadout,
}

scriptId = 'com.hritikaggarwal.myfirstscript'
-- domain

scriptTitle = "My First Script"
-- name of the script

scriptDetailsUrl = "hritikaggarwal.com"
-- website homepage for the product

function onPoseEdge(pose, edge)
	if(pose == "doubleTap") then
		myo.unlock("timed")
	elseif (pose == "rest") then
		-- Do nothing
	else
    	if(edge == "on") then
	    	-- myo.debug("onPoseEdge: " .. pose .. ", " .. edge)
	    	sendMessage(pose .. "")
			myo.lock()
		end
	end

end

function onPeriodic()
end

function onForegroundWindowChange(app, title)
    -- myo.debug("onForegroundWindowChange: " .. app .. ", " .. title)
    return true
end

function activeAppName()
    return "Output Everything"
end

function onActiveChange(isActive)
    -- myo.debug("onActiveChange")
end

function sendMessage(msg)
	-- myo.debug(msg)
	if (msg == "fist") then
		myo.keyboard("1", "press")
	elseif (msg == "waveOut") then
		myo.keyboard("2", "press")
	elseif (msg == "waveIn") then
		myo.keyboard("3", "press")
	elseif (msg == "fingersSpread") then
		myo.keyboard("4", "press")
	end
end


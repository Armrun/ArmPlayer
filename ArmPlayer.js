/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-23 22:12:32
 * @version $Id$
 */

//播放时间分秒计算函数 
var ruleTime = function(time) {
	// var str = String(time)
	// log('事件类型', time)
	var min = Math.floor(time / 60)
	var x = 60 * min
	var sec = Math.floor(time - x)
	// log(`分:${min} 秒:${sec}`)
	return [min, sec]
}

// 数字转两位字符串函数
var number2 = function(num) {
	// var len = String(num).lenght
	if (num <= 9) {
		var s = String(num)
		return '0' + s
	}
	return String(num)
}

var progressBarTime = function() {
	var bar = e('.progress-bar')
	setInterval(function(){
		// 选中操作元素
		var m = e('#id-audio-player')
		var s = e('#id-span-now')
		var ends = e('#id-span-end')
		// 计算播放比率
		var time = m.currentTime
		var x = time / m.duration * 100
		bar.style.setProperty('width',`${x}%`);
		// 播放时间
		var now = ruleTime(m.currentTime)
		var end = ruleTime(m.duration)
		// `${number2(now[0])}:${number2(now[1])}`
		s.innerHTML = `${number2(now[0])}:${number2(now[1])}`
		ends.innerHTML = `${number2(end[0])}:${number2(end[1])}`

	},100)
}

var bindTing = function() {
	// 播放按钮点击与
	var p = e('.playbutton')
	bind(p, 'click', function(){
		// 转换播放按钮样式
		toggleClass(p, 'clicked')
		// 点击播放音乐
		var m = e('#id-audio-player')
		if(m.paused) {
			log('可播放')
			m.play()
		} else if(!m.paused) {
			log('不可播放')
			m.pause()
		}

	})
	bind(window, 'keydown', function(event){
		if (event.keyCode == 32) {
			log('dain;o 空行')
			toggleClass(p, 'clicked')
			// 点击播放音乐
			var m = e('#id-audio-player')
			if(m.paused) {
				log('可播放')
				m.play()
			} else if(!m.paused) {
				log('不可播放')
				m.pause()
			}
		}
	})
	// 音量调节事件设置
	var m = e('#id-audio-player')
	var v = e('#id-span-v')
	m.volume = 0.5
	bind(window, 'keydown', function(event){
		log('****键值', event.keyCode)
		if (event.keyCode == 38) {
			log('加音量')
			if(m.volume < 1) {
				m.volume += 0.1
				v.innerHTML = `📢:${Math.floor(m.volume * 100)}%`
			} 

			 
		} else if (event.keyCode == 40) {
			log('减音量')
			if(m.volume > 0.1) {
				m.volume -= 0.1
				// log('音量；', m.volume)
				v.innerHTML = `📢:${Math.floor(m.volume * 100)}%`
			}
		}
	})

	progressBarTime()
}

var __main = function() {
	bindTing() 
	
}

__main()
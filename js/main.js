document.addEventListener("DOMContentLoaded", function () {
	/* 当HTML文档加载完成后执行函数 */ var qrCode1Image = new Image(); /* 创建一个Image对象用于加载QR Code图像 */
	qrCode1Image.src = new QRCode(document.createElement("div") /* 创建一个div元素 */, {
		text: "https://qr.alipay.com/fkx15822ajvoraa4ct3ro65" /* 设置二维码1的内容 */,
		width: 300 /* 设置二维码宽度 */,
		height: 300 /* 设置二维码高度 */,
		correctLevel: QRCode.CorrectLevel.H /* 设置二维码纠错级别 */,
	})._el.firstChild.toDataURL(); /* 将二维码转为DataURL */
	var qrCode1Element = document.getElementById("qr-code1"); /* 获取元素id为"qr-code1"的元素 */
	qrCode1Element.appendChild(qrCode1Image); /* 将二维码图像添加到元素中 */

	var qrCode2Image = new Image(); /* 创建一个Image对象用于加载QR Code图像 */
	qrCode2Image.src = new QRCode(document.createElement("div") /* 创建一个div元素 */, {
		text: "wxp://f2f0lzJTSKwO2O1IZ0alAGVZQ7SihgoWjfhsG0XL_68o5zs" /* 设置二维码2的内容 */,
		width: 300 /* 设置二维码宽度 */,
		height: 300 /* 设置二维码高度 */,
		correctLevel: QRCode.CorrectLevel.H /* 设置二维码纠错级别 */,
	})._el.firstChild.toDataURL(); /* 将二维码转为DataURL */
	var qrCode2Element = document.getElementById("qr-code2"); /* 获取元素id为"qr-code2"的元素 */
	qrCode2Element.appendChild(qrCode2Image); /* 将二维码图像添加到元素中 */

	var qrCode3Image = new Image(); /* 创建一个Image对象用于加载QR Code图像 */
	qrCode3Image.src = new QRCode(document.createElement("div") /* 创建一个div元素 */, {
		text: "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=CAEQ34nkCxj2rIWkBkIgNGMzYTk1MjhhMDI5MzM3Yzk3NjQ4Y2YzZDE4MTkxNjY%3D_xxx_sign&u=24708319" /* 设置二维码3的内容 */,
		width: 300 /* 设置二维码宽度 */,
		height: 300 /* 设置二维码高度 */,
		correctLevel: QRCode.CorrectLevel.H /* 设置二维码纠错级别 */,
	})._el.firstChild.toDataURL(); /* 将二维码转为DataURL */
	var qrCode3Element = document.getElementById("qr-code3"); /* 获取元素id为"qr-code3"的元素 */
	qrCode3Element.appendChild(qrCode3Image); /* 将二维码图像添加到元素中 */
});

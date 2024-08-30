export const SHOW_EMOJIS_TIME = 750
export const SHORT_POST_LENG = 85

export const UI_FOOTER = {
	languages: ["English (US)", "Español", "Français (France)", "Português (Brasil)", "Italiano", "Deutsch", "العربية", "हिन्दी", "中文(简体)", "日本語"],
	links: ["Sign Up", "Log In", "Messenger", "Facebook Lite", "Video", "Places", "Games", "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Meta AI", "Instagram", "Threads", "Fundraisers", "Services", "Voting Information Center", "Privacy Policy", "Privacy Center", "Groups", "About", "Create ad", "Create Page", "Developers", "Careers", "Cookies", "Ad choices", "Terms", "Help", "Contact Uploading & Non-Users"],
}

export const SIDEBAR_ITEMS = [
	{ name: 'Friends', offset: 'object-[0px_-0px]' },
	{ name: 'Memories', offset: 'object-[0px_-37px]' },
	{ name: 'Saved', offset: 'object-[0px_-74px]' },
	{ name: 'Groups', offset: 'object-[0px_-111px]' },
	{ name: 'Video', offset: 'object-[0px_-148px]' },
	{ name: 'Marketplace', offset: 'object-[0px_-185px]' },
	{ name: 'Feeds', offset: 'object-[0px_-222px]' },
	{ name: 'Events', offset: 'object-[0px_-259px]' },
	{ name: 'Ads Manager', offset: 'object-[0px_-296px]' },
	{ name: 'Birthdays', offset: 'object-[0px_-333px]' },
	{ name: 'Climate Science Center', offset: 'object-[0px_-370px]' },
	{ name: 'Fundraisers', offset: 'object-[0px_-407px]' },
	{ name: 'Gaming Video', offset: 'object-[0px_-444px]' },
	{ name: 'Messenger', offset: 'object-[0px_-481px]' },
	{ name: 'Messenger Kids', offset: 'object-[0px_-518px]' },
	{ name: 'Orders and payments', offset: 'object-[0px_-555px]' },
	{ name: 'Pages', offset: 'object-[0px_-592px]' },
	{ name: 'Play games', offset: 'object-[0px_-629px]' },
	{ name: 'Recent ad activity', offset: 'object-[0px_-666px]' },
]

export const EMOJI_LIST = {
	like: {
		name: 'like',
		icon: 'Facebook-Clone/system/emojis/tdr1inuxah53wtarwpb3',
		color: '#0866ff'
	},
	love: {
		name: 'love',
		icon: 'Facebook-Clone/system/emojis/xjxxrp5mpmargabenktf',
		color: '#f33e58'
	},
	care: {
		name: 'care',
		icon: 'Facebook-Clone/system/emojis/tamzzkesadnbfjkqkual',
		color: '#f7b125'
	},
	haha: {
		name: 'haha',
		icon: 'Facebook-Clone/system/emojis/lwwjgj09mvrv3p5f7yar',
		color: '#f7b125'
	},
	wow: {
		name: 'wow',
		icon: 'Facebook-Clone/system/emojis/dusb2lpr1rwwi1yhrmyo',
		color: '#f7b125'
	},
	sad: {
		name: 'sad',
		icon: 'Facebook-Clone/system/emojis/ygsrlalqj5gpbf3ng28j',
		color: '#f7b125'
	},
	angry: {
		name: 'angry',
		icon: 'Facebook-Clone/system/emojis/b5tlcolbndamzurfffor',
		color: '#e9710f'
	},
}

export const POST_THEMES = [
	{
		id: 1,
		background: 'linear-gradient(45deg, rgb(93, 63, 218), rgb(252, 54, 253))',
		mini: 'linear-gradient(45deg, rgb(93, 63, 218), rgb(252, 54, 253))',
		dark: false,
	}
]

export const users = [
	{
		id: '663awdcc9bc26cd4ddjawd32',
		name: 'Jose Romero',
		username: 'jose.romero.9602',
		profile: 'v1724189947/Facebook-Clone/system/assets/pkvnxwqgdfdvlwp65hvv'
	},
	{
		id: '66b43b8cc9bc26cd4c02b491',
		name: 'Linus Torvalds',
		username: 'lintorvalds',
		profile: 'v1724134012/Facebook-Clone/users/profile_photos/hs1vd5m28lfqovaahjhe'
	},
	{
		id: '66c76413ecc023302196e6a6',
		name: 'Aura Castro',
		username: '66c76413ecc023302196e6a6',
		profile: 'v1724343676/Facebook-Clone/users/profile_photos/djar33p0uplnlpv5rqqj'
	}
]

export const posts = [
	{
		id: 'mjdj8123u00d',
		type: 'post',
		user: '66b43b8cc9bc26cd4c02b491',
		content: {
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, at quisquam mollitia ea ipsum odit dolorum, hic impedit aspernatur saepe totam nobis veniam expedita quo!'
		},
		reactions: {
			like: [
				'66b43b8cc9bc26cd4c02b491',
			],
		},
	},
	{
		id: 'cfdj8123u00d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123u00d',
	},

	{
		id: 'mjdj8123u01d',
		user: '66b43b8cc9bc26cd4c02b491',
		type: 'post',
		content: {
			text: 'Hola xD'
		},
		reactions: {
			haha: [
				'663awdcc9bc26cd4ddjawd32',
			]
		},
		comments: [
			{ user: '663awdcc9bc26cd4ddjawd32', content: 'Holi hehehe' },
		],
	},
	{
		id: 'cfdj8123u01d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123u01d'
	},

	{
		id: 'mjdj8123u02d',
		user: '66b43b8cc9bc26cd4c02b491',
		type: 'post',
		content: {
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolor aliquid, ullam, deserunt fuga hic soluta optio laborum repellendus, consequuntur cumque impedit veniam amet aperiam. Earum numquam alias quod tempora amet. \nUllam pariatur porro necessitatibus nostrum deserunt cumque doloremque error distinctio rem laborum, voluptates, molestiae eaque id, ipsa esse eligendi!',
		},
		image: {
			url: '/img/post.jpg',
			color: '#4D496A'
		},
		shares: [
		 '663awdcc9bc26cd4ddjawd32',
		 '66c76413ecc023302196e6a6',
		],
		reactions: {
			like: [
				'663awdcc9bc26cd4ddjawd32',
			],
			love: [
				'66c76413ecc023302196e6a6',
			],
		},
		comments: [
			{ user: '66c76413ecc023302196e6a6', content: 'Good post!' },
			{ user: '66b43b8cc9bc26cd4c02b491', content: 'Thank you' },
			{ user: '663awdcc9bc26cd4ddjawd32', content: 'Please, add more' },
		],
	},
	{
		id: 'cfdj8123u02d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123u02d'
	},

	{
		id: 'mjdj8123412d',
		user: '66b43b8cc9bc26cd4c02b491',
		type: 'post',
		image: {
			url: '/img/post2.jpg',
			color: '#FFFFFF'
		},
		reactions: {
			haha: [
				'663awdcc9bc26cd4ddjawd32',
				'66c76413ecc023302196e6a6',
				'66b43b8cc9bc26cd4c02b491'
			],
		},
	},
	{
		id: 'cfdj8123412d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123412d',
	},

	{
		id: 'mjdj8123413d',
		user: '66b43b8cc9bc26cd4c02b491',
		type: 'post',
		content: {
			text: 'SQL command cheat sheet',
		},
		image: {
			url: '/img/post3.webp',
			color: '#2F2F2F'
		},
		reactions: {
			like: [
				'663awdcc9bc26cd4ddjawd32',
			],
			wow: [
				'66c76413ecc023302196e6a6',
			],
		},
	},
	{
		id: 'cfdj8123413d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123413d',
	},

	{
		id: 'mjdj8123u59d',
		user: '66b43b8cc9bc26cd4c02b491',
		type: 'post',
		content: {
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			theme: 1
		},
	},
	{
		id: 'cfdj8123u59d',
		user: '663awdcc9bc26cd4ddjawd32',
		type: 'share',
		ref: 'mjdj8123u59d',
	},
]

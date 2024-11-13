import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    let shortcode = params.code;

	const testShow = {
		show_id: 1,
		title: 'Test event',
		start: '2024-10-31T15:30:00',
		end: '2024-10-31T16:30:00',
		options: {
			featured: true
		},
		content: {
			title: {
				'en-US': 'Test event',
				'ja-JP': 'テストイベント'
			},
			description: {
				'en-US': 'This is my test event',
				'ja-JP': 'これは私のテストイベントです'
			}
		}
	};
	
	

	const testRoom = {
		show_id: 1, 
		options: {
			theme: {
				brand_primary: '#ff000',
				brand_secondary: '#ee0000',
			},
			chat: true,				
		},
		layouts: [
			{
				index: 1,
				template: {					
					sections: [
					  {
						type: "video",
						name: "video-main",
						colStart: 1,
						colEnd: 13,
						rowStart: 1,
						rowEnd: 13,
				  
						aspectRatio: "video",
					  },
					],
				  }
			},
			{
				index: 2,
				template: {				
					sections: [
						{
							type: 'video',
							name: 'video-main',
							colStart: 8,
							colEnd: 13,
							rowStart: 1,
							rowEnd: 7,
							yTilt: -15,
							aspectRatio: 'video'
						},
						{
							type: 'deck',
							name: 'deck-1',
							colStart: 8,
							colEnd: 13,
							rowStart: 7,
							rowEnd: 13,
							yTilt: -15,
							aspectRatio: 'video'
						},
						{
							type: 'poll',
							name: 'poll-1',
							colStart: 1,
							colEnd: 8,
							rowStart: 1,
							rowEnd: 13,
							yTilt: -15,
							aspectRatio: 'square'
						}
					]
				}
			}
		]
	}
	return {
		room: testRoom,
		show: testShow
	};
};
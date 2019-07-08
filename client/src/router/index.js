import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Posts from '@/components/Posts';
import NewPost from '@/components/NewPost';
import EditPost from '@/components/EditPost';
import Counter from '@/components/Counter';
import LightBulbsMotion from '../components/sensors/LightBulbsMotion';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/posts',
			name: 'Posts',
			component: Posts
		},
		{
			path: '/posts/new',
			name: 'NewPost',
			component: NewPost
		},
		{
			path: 'posts/:id',
			name: 'EditPost',
			component: EditPost
		},
		{
			path: '/counter',
			name: 'Counter',
			component: Counter
		},
		{
			path: '/rooms/light_bulbs/',
			name: 'LightBulbs',
			component: LightBulbsMotion
		}
	]
});

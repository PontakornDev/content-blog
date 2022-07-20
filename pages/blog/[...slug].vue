<template>
	<div>
		<main>
			<div 
				class="lg:space-x-10 px-[5%] lg:px-[10%] pt-5"
			>
				<div class="flex w-full border-b-2 border-gray-400 inline-block">
					<Icon icon="mdi:calendar-range" width="24" height="24"/>
					<p v-if="!blog.head.updateAt">เขียนเมื่อวันที่: {{blog.head.createAt}}</p>
					<p v-else>อัพเดทเมื่อวันที่: {{blog.head.updateAt}}</p>
					<Icon class="ml-5" icon="mdi:face-man-shimmer" width="24" height="24" />
					<p> ผู้เขียน: {{blog.head.writer}}</p>
				</div>
			</div>
			<article
				class="lg:pt-20 md:pt-12 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
			>
				<div
					v-if="blog.excerpt"
					class="xl:w-[900px] lg:w-[1200px] p-5 sticky top-20 border rounded-md bg-white hidden lg:block"
				>
					<h2 class="text-xl font-bold mb-4 underline underline-offset-4">หัวข้อ</h2>
					<ul class="space-y-2">
						<template v-for="(t, k) in toc" :key="`toc-item-${k}`">
							<li>
								<NuxtLink
									:class="{
										'text-md font-bold ml-4 hover:text-violet-700': t.depth == 2,
										'text-[13px] ml-6 hover:text-green-500': t.depth > 2,
									}"
									class="capitalize"
									:to="`#${t.id}`"
									>
									{{ t.depth == 2 ? "* "+t.title: "- "+t.title}}
									</NuxtLink
								>
							</li>
						</template>
					</ul>
				</div>
				<ClientOnly>
					<ContentRenderer
						class="prose lg:prose-base prose-md prose-p:font-medium prose-p:text-lg prose-slate blog-link max-w-none"
						:value="blog"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
				</ClientOnly>
			</article>
		</main>
	</div>
</template>

<script setup>
	import { Icon } from "@iconify/vue";

	const slug = useRoute().params.slug.toString().replace(/,/g, "/");
	const { data: blog } = await useAsyncData(slug, () => queryContent(slug).findOne())

	const toc = computed(() => {
		if (!blog.value) return [];
		const items = blog.value.excerpt?.children;
		
		if (!items) return [];
		const toc = [];
		const tags = ["h2", "h3", "h4", "h5", "h6"];
		items.forEach((item) => {
			if (tags.includes(item.tag)) {
				toc.push({
					id: item.props.id,
					title: item.props.id.toString().replace(/-/g, " "),
					depth: Number(item.tag.replace(/h/g, "")),
				});
			}
		});
		return toc;
	})

	useHead({
		title: `${blog.value.head.title}`,
		meta: [
			{ name: "keywords", content: `${blog.value.head.title}`,},
			{ name: "description", content: `${blog.value.head.description}`,},
			{hid: 'og:title', property: "og:title", content: `Dev Learning - ${blog.value.head.title}`,},
			{property: "og:description", content: `${blog.value.head.description}`,},
			{property: "og:locale", content: "th_TH",},
        	{property: "og:type", content: "article",},
			{hid: 'og:image', property: "og:image", content: "/On-Page-SEO.png",},
			{property: "og:image:width", content: "700",},
			{property: "og:image:height", content: "495",},
			{property:"og:url", content:`https://www.devlearning.dev/${blog._value._path}`,},
			{hid: 'twitter:title', property: "twitter:title", content: `Dev Learning - ${blog.value.head.title}`,},
			{property: "twitter:description", content: `${blog.value.head.description}`,},
			{property: "twitter:locale", content: "th_TH",},
        	{property: "twitter:type", content: "article",},
			{hid: 'twitter:image', property: "twitter:image", content: "/On-Page-SEO.png",},
			{property: "twitter:image:width", content: "700",},
			{property: "twitter:image:height", content: "495",},
			{property:"twitter:url", content:`https://www.devlearning.dev/${blog._value._path}`,},
			],
		link: [
			{rel: "canonical", href: `https://www.devlearning.dev/${blog._value._path}`,}
        ],
	});
</script>

<style scoped>
	.blog-link {
		@apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
	}
</style>

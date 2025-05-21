<template>
  <div>
    <main>
      <div class="lg:space-x-10 px-[5%] lg:px-[10%] pt-10">
        <div class="flex w-full border-b-2 border-gray-400">
          <Icon icon="mdi:calendar-range" width="24" height="24" />
          <p>เขียนเมื่อวันที่: {{ blog.head.createAt }}</p>
          <Icon
            class="ml-2 md:ml-5"
            icon="mdi:face-man-shimmer"
            width="24"
            height="24"
          />
          <p>ผู้เขียน: {{ blog.head.writer }}</p>
          <button
            class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded fixed right-5 bottom-2 z-10"
            v-on:click="shareFB()"
          >
            <svg
              class="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>
      <article
        class="lg:pt-20 md:pt-12 pt-10 flex items-start lg:space-x-10 px-[5%] lg:px-[10%]"
      >
        <div
          v-if="blog.excerpt"
          class="w-[300px] p-5 sticky top-20 border rounded-md bg-white hidden lg:block"
        >
          <h2
            class="w-[300px] text-xl font-bold mb-4 underline underline-offset-4"
          >
            Table of Content
          </h2>
          <ul class="space-y-2">
            <li v-for="(t, i) in toc" :key="`toc-item-${i}`">
              <NuxtLink
                :class="{
                  'text-md font-bold ml-4 hover:text-violet-700': t.depth == 2,
                  'text-[13px] ml-6 hover:text-green-500': t.depth > 2,
                }"
                class="capitalize"
                :to="`#${t.id}`"
              >
                {{ t.depth == 2 ? "* " + t.title : "- " + t.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <ClientOnly>
          <ContentRenderer
            class="prose lg:prose-base prose-md prose-p:font-medium prose-p:text-lg prose-slate blog-link max-w-sm md:max-w-none prose-pre:whitespace-normal"
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
import { constants } from "~/utils/constant";

const slug = useRoute().params.slug.toString().replace(/,/g, "/");
const { data: blog } = await useAsyncData(slug, () =>
  queryContent(slug).findOne()
);

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
});

const shareFB = () => {
  const url = `${constants.DOMAIN}/blog${blog._value._path}`;
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;
};

useHead({
  title: `${blog.value.head.title}`,
  meta: [
    { name: "description", content: `${blog.value.head.description}` },
    {
      property: "og:title",
      content: `${constants.WEBSITE_NAME} - ${blog.value.head.title}`,
    },
    { property: "og:description", content: `${blog.value.head.description}` },
    { property: "og:locale", content: "th_TH" },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: `${constants.DOMAIN}/${blog.value.head.imgshr}`,
    },
    { property: "og:image:width", content: "700" },
    { property: "og:image:height", content: "495" },
    { property: "og:image:alt", content: `${constants.NAME}/article` },
    {
      property: "og:url",
      content: `${constants.DOMAIN}/blog${blog._value._path}`,
    },
    {
      property: "twitter:title",
      content: `${constants.WEBSITE_NAME} - ${blog.value.head.title}`,
    },
    {
      property: "twitter:description",
      content: `${blog.value.head.description}`,
    },
    { property: "twitter:locale", content: "th_TH" },
    { property: "twitter:type", content: "article" },
    {
      property: "twitter:image",
      content: `${constants.DOMAIN}/upload/img_blog/${blog.value.head.imgshr}`,
    },
    { property: "twitter:image:width", content: "700" },
    { property: "twitter:image:height", content: "495" },
    {
      property: "twitter:image:alt",
      content: `${constants.WEBSITE_NAME}/article`,
    },
    {
      property: "twitter:url",
      content: `${constants.DOMAIN}/blog${blog._value._path}`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `${constants.DOMAIN}/blog${blog._value._path}`,
    },
  ],
});
</script>

<style scoped>
.blog-link {
  @apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
}
</style>

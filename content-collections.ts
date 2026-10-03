import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

import { normalizePostDate } from './src/lib/date'

const posts = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()),
    slug: z.string().optional(),
    image: z.string(),
    // Invalid or empty dates become null instead of failing the whole collection
    date: z.union([z.string(), z.date()]).nullish(),
    content: z.string(),
  }),
  transform: async (doc) => {
    const date = normalizePostDate(doc.date)
    if (date === null) {
      console.warn(
        `[posts] "${doc._meta.filePath}" tidak memiliki tanggal rilis valid (YYYY-MM-DD)`,
      )
    }
    return {
      ...doc,
      date,
      slug: doc.title
        .toLowerCase()
        .replace('.md', '')
        .replace(/[^\w-]+/g, '_'),
    }
  },
})

export default defineConfig({
  collections: [posts],
})

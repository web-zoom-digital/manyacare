import { MetadataRoute } from 'next';
import { DEPARTMENTS } from '@/data/departments';
import { DOCTORS } from '@/data/doctors';
import { BLOG_POSTS } from '@/data/blogs';
import { LOCATIONS } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.manyacare.com';

  const staticRoutes = [
    '',
    '/about-us',
    '/specialists',
    '/departments',
    '/diagnostics',
    '/radiology',
    '/home-healthcare',
    '/health-packages',
    '/medical-education',
    '/patient-resources',
    '/blog',
    '/careers',
    '/contact-us',
    '/locations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const departmentRoutes = DEPARTMENTS.map((dept) => ({
    url: `${baseUrl}/departments/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const doctorRoutes = DOCTORS.map((doc) => ({
    url: `${baseUrl}/specialists/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const locationRoutes = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...departmentRoutes,
    ...doctorRoutes,
    ...blogRoutes,
    ...locationRoutes,
  ];
}

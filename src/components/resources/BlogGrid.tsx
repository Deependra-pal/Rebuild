'use client';

import React from 'react';
import BlogCard from '../shared/BlogCard';

export default function BlogGrid() {
  const blogs = [
    {
      imgTitle: 'Switching from Slack: a 1-day plan',
      category: 'Migration',
      title: 'How to move your team off Slack in a day',
      description: 'A simple checklist to bring your channels, people, and histories across without any operational friction.',
      readTime: '6 min read',
      type: 'Guide',
    },
    {
      imgTitle: 'The real cost of your tool stack',
      category: 'Cost Control',
      title: "What your team's tools actually cost per year",
      description: 'Add up chat, video, calling, and task trackers — then calculate the true cost of tool fragmentation.',
      readTime: '4 min read',
      type: 'Playbook',
    },
    {
      imgTitle: 'Data residency & the DPDP Act',
      category: 'Compliance',
      title: 'What the DPDP Act means for your team chat',
      description: 'A plain-language breakdown of database residency requirements and compliance parameters in India.',
      readTime: '5 min read',
      type: 'Explainer',
    },
    {
      imgTitle: 'Running better standups',
      category: 'Productivity',
      title: "How to run a standup people don't dread",
      description: 'Leverage async voice updates and task tags to keep standups under five minutes.',
      readTime: '5 min read',
      type: 'Guide',
    },
    {
      imgTitle: 'Working with clients in chat',
      category: 'Operations',
      title: 'Set up client rooms without oversharing',
      description: 'How Squeako guest spaces let client teams view only selected discussion feeds.',
      readTime: '4 min read',
      type: 'How-to',
    },
    {
      imgTitle: 'Remote teams across India',
      category: 'Remote work',
      title: 'Keeping a distributed Indian team in sync',
      description: 'Actionable tips on managing timezone spreads, presence status, and async habits.',
      readTime: '6 min read',
      type: 'Playbook',
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              imgTitle={blog.imgTitle}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              readTime={blog.readTime}
              type={blog.type}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

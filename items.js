const items = [
  {
    id: 1, title: 'dashboard', icon: 'Home', parent_id: null
  },
  {
    id: 2, title: 'courses', icon: 'CoursesIcon', parent_id: null
  },
  {
    id: 9, title: 'courses', parent_id: 2
  },
  {
    id: 10, title: 'create course', parent_id: 9
  },
  {
    id: 3, title: 'students', icon: 'SchoolOutline', parent_id: 10
  },
  {
    id: 11, title: 'students', parent_id: 9
  },
  {
    id: 12, title: 'create student', parent_id: 3
  },
  {
    id: 4, title: 'advisors', icon: 'HumanMaleBoard', parent_id: null
  },
  {
    title: 'advisors', parent_id: 4
  },
  {
    title: 'create advisor', parent_id: 4
  },
  {
    id: 5, title: 'need help', icon: 'HelpCircleOutline', parent_id: null
  },
  {
    id: 6, title: 'faqs', icon: 'ChatQuestionOutline', parent_id: null
  },
  {
    id: 7, title: 'system settings', icon: 'Cog', parent_id: null
  },
  {
    id: 13, title: 'system users', parent_id: 7
  },
  {
    id: 14, title: 'roles & permissions', parent_id: 7
  },
  {
    id: 15, title: 'announcements', parent_id: 7
  },
  {
    id: 16, title: 'country & state', parent_id: 7
  },
  {
    id: 17, title: 'schools', parent_id: 7
  },
  {
    id: 18, title: 'curriculum', parent_id: 7
  },
  {
    id: 19, title: 'avatars', parent_id: 7
  },
  {
    id: 20, title: 'badges', parent_id: 7
  },
  {
    id: 21, title: 'Leader Board', icon: 'LeadershipIcon', parent_id: null
  }
];
export { items };
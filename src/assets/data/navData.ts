export const navData = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    icon: 'video_library',
    label: 'Content',
    route: 'content',
    subItems: [
      {
        icon: 'play_circle',
        label: 'Videos',
        route: 'videos',
      },
      {
        icon: 'playlist_play',
        label: 'Playlists',
        route: 'playlists',
      },
      {
        icon: 'post_add',
        label: 'Posts',
        route: 'posts',
      },
    ],
  },
  {
    icon: 'analytics',
    label: 'Analytics',
    route: 'analytics',
  },
  {
    icon: 'comment',
    label: 'Comments',
    route: 'comments',
  },
];

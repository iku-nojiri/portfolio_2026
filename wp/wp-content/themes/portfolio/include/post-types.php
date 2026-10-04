<?php

// ---------- 投稿タイプを追加 ----------
function portfolio_register_post_types()
{
    register_post_type('works', [
        'labels' => [
            'name' => 'Works',
            'singular_name' => 'Works',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_position' => 5,
        'menu_icon' => 'dashicons-portfolio',
    ]);
    register_post_type('blog', [
        'labels' => [
            'name' => 'Blog',
            'singular_name' => 'Blog',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_position' => 5,
        'menu_icon' => 'dashicons-edit-page',
    ]);
    register_post_type('news', [
        'labels' => [
            'name' => 'News',
            'singular_name' => 'News',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_position' => 5,
        'menu_icon' => 'dashicons-megaphone',
    ]);
}

add_action('init', 'portfolio_register_post_types');

// ---------- 投稿タイプを削除 ----------
function portfolio_remove_default_menus() {
    remove_menu_page('edit.php');           // 投稿
    remove_menu_page('edit.php?post_type=page'); // 固定ページ
    remove_menu_page('edit-comments.php');  // コメント
}

add_action('admin_menu', 'portfolio_remove_default_menus');

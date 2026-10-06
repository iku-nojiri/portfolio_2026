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
        'supports' => [],
        'menu_position' => 6,
        'menu_icon' => 'dashicons-edit-page',
    ]);
    register_post_type('news', [
        'labels' => [
            'name' => 'News',
            'singular_name' => 'News',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => [],
        'menu_position' => 7,
        'menu_icon' => 'dashicons-megaphone',
    ]);
}

add_action('init', 'portfolio_register_post_types');

// ---------- デフォルトのエディタを非表示削除 ----------

function portfolio_remove_editor_support()
{
    remove_post_type_support('works', 'editor');
    remove_post_type_support('blog', 'editor');
    remove_post_type_support('news', 'editor');
}

add_action('init', 'portfolio_remove_editor_support', 100);

// ---------- 投稿タイプを削除 ----------
function portfolio_remove_default_menus()
{
    remove_menu_page('edit.php');           // 投稿
    remove_menu_page('edit.php?post_type=page'); // 固定ページ
    remove_menu_page('edit-comments.php');  // コメント
}

add_action('admin_menu', 'portfolio_remove_default_menus');

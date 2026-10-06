<?php

function portfolio_register_taxonomies()
{
    register_taxonomy('news_category', ['news'], [
        'labels' => [
            'name' => 'Categories',
            'singular_name' => 'Category',
        ],
        'public' => true,
        'show_in_rest' => true,
        'hierarchical' => true,
    ]);
}

add_action('init', 'portfolio_register_taxonomies');

?>
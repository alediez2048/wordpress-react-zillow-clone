<?php

// At the top of your functions.php file
add_action('admin_init', function() {
    error_log('functions.php is loaded!');
});

// ... rest of your existing code ...

// Test if file is being loaded
add_action('admin_init', function() {
    error_log('functions.php is loaded!');
});

// Register Custom Post Type for Properties
function create_property_post_type() {
    register_post_type(
        'property',
        array(
            'labels' => array(
                'name' => 'Properties',
                'singular_name' => 'Property'
            ),
            'public' => true,
            'show_in_menu' => true,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-building',
            'supports' => array('title', 'editor', 'thumbnail'),
            'show_in_graphql' => true,
            'graphql_single_name' => 'property',
            'graphql_plural_name' => 'properties'
        )
    );
}
add_action('init', 'create_property_post_type');

// Add custom fields to GraphQL schema
add_action('graphql_register_types', function() {
    register_graphql_field('Property', 'price', [
        'type' => 'Float',
        'description' => 'Property price'
    ]);
    register_graphql_field('Property', 'bedrooms', [
        'type' => 'Int',
        'description' => 'Number of bedrooms'
    ]);
    register_graphql_field('Property', 'bathrooms', [
        'type' => 'Float',
        'description' => 'Number of bathrooms'
    ]);
    register_graphql_field('Property', 'squareFeet', [
        'type' => 'Int',
        'description' => 'Square footage of the property'
    ]);
});


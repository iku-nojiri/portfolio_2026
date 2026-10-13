<?php 
// ----- カスタム投稿タイプの登録 ----- 
include(get_template_directory() . '/include/post_types.php');

// ----- カスタムタクソノミーの登録 ----- 
include(get_template_directory() . '/include/taxonomies.php');


// ----- その他の処理 ----- 

// ACFの画像フィールドの返り値をURLに変換する
add_filter(
  'acf/rest/format_value_for_rest',
  function ($formatted_value, $post_id, $field, $value, $format) {
    if (
      $field['name'] !== 'img' ||
      get_post_type($post_id) !== 'works'
    ) {
      return $formatted_value;
    }

    $image_id = 0;

    if (is_numeric($value)) {
      $image_id = (int) $value;
    } elseif (is_numeric($formatted_value)) {
      $image_id = (int) $formatted_value;
    } elseif (is_array($value) && isset($value['ID'])) {
      $image_id = (int) $value['ID'];
    } elseif (is_array($formatted_value) && isset($formatted_value['ID'])) {
      $image_id = (int) $formatted_value['ID'];
    }

    if (!$image_id) {
      return $formatted_value;
    }

    $image_url = wp_get_attachment_image_url($image_id, 'full');

    return $image_url ?: $formatted_value;
  },
  10,
  5
);
?>
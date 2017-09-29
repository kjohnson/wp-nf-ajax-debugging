<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Plugin Name: Ninja Forms - AJAX Debugging
 */

function nfAjaxDebuggingEnqueueScripts( $data ){
    wp_enqueue_script( 'nf-ajax-debugging', plugin_dir_url( __FILE__ ) . 'script.js', array( 'jquery', 'nf-front-end' ) , true );
}
add_action( 'ninja_forms_enqueue_scripts', 'nfAjaxDebuggingEnqueueScripts' );

// FOR TESTING
//function nfAjaxDebuggingForcedResponse(){
//    die( '-1' );
//}
//add_action( 'wp_ajax_nf_ajax_submit', 'nfAjaxDebuggingForcedResponse', -1  );
//add_action( 'wp_ajax_nopriv_nf_ajax_submit', 'nfAjaxDebuggingForcedResponse', -1  );

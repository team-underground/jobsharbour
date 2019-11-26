<?php

/**
 * @see https://github.com/artesaos/seotools
 */

return [
    'meta' => [
        /*
         * The default configurations to be used by the meta generator.
         */
        'defaults'       => [
            'title'        => "Jobs Harbour", // set false to total remove
            'titleBefore'  => false, // Put defaults.title before page title, like 'It's Over 9000! - Dashboard'
            'description'  => 'Jobs Harbour is an online web based job listing site for both employers and job seekers. Its primary goal is to provide you upto date job information from all around Assam and the Northeast', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => [],
            'canonical'    => false, // Set null for using Url::current(), set false to total remove
            'robots'       => false, // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ],
        /*
         * Webmaster tags are always added.
         */
        'webmaster_tags' => [
            'google'    => null,
            'bing'      => null,
            'alexa'     => null,
            'pinterest' => null,
            'yandex'    => null,
        ],

        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
            'title'       => 'Jobs Harbour', // set false to total remove
            'description' => 'Jobs Harbour is an online web based job listing site for both employers and job seekers. Its primary goal is to provide you upto date job information from all around Assam and the Northeast.', // set false to total remove
            'url'         => false, // Set null for using Url::current(), set false to total remove
            'type'        => false,
            'site_name'   => false,
            'images'      => ['https://jobsharbour.com/jh-logo.png'],
        ],
    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            //'card'        => 'summary',
            //'site'        => '@LuizVinicius73',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
        'defaults' => [
            'title'       => 'Jobs Harbour', // set false to total remove
            'description' => 'Jobs Harbour is an online web based job listing site for both employers and job seekers. Its primary goal is to provide you upto date job information from all around Assam and the Northeast.', // set false to total remove
            'url'         => false, // Set null for using Url::current(), set false to total remove
            'type'        => 'WebPage',
            'images'      => ['https://jobsharbour.com/jh-logo.png'],
        ],
    ],
];

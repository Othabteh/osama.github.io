<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'G/c!mrec6-OThcipT@>^il{|Y)#3`m7_j/*(FLWghlh2SR`Vb>v#hG~!uk4CjX{_' );
define( 'SECURE_AUTH_KEY',  '}W9Pt-CM%4/b=/P(,9!im*Ofz= L^Oxyu]6EGtj$moh0UKtoMZ6;{[AD:N9F?=SQ' );
define( 'LOGGED_IN_KEY',    'gA):zoJcAL.)]Nt,=rQP?0gInZdtTu;J}=Xj5m05h!2M]BF^QyI 7@4:.Y+}a7][' );
define( 'NONCE_KEY',        '/3;r{Sd0{JfA4%.?MAuneJc8U4^RQ.bIv;DbYd7Y+:-d:8xiXxI/%6w|aU2{1UP*' );
define( 'AUTH_SALT',        'uqm3A.1uHu.,$^QeT,ul1?G=odSdEF%Nk.[7*MOoz >5JoI5R5Qj0~?Q8&G?3g4M' );
define( 'SECURE_AUTH_SALT', 'nWJ,[`4s.uCosU#4y=6){M{2EY5hNI$UFbb{MnBDoIG|4*;YtMm|jU`XH%o1LKo*' );
define( 'LOGGED_IN_SALT',   'tAD?oyHn1UR(lZ0|CK@.uH?Y]2y/9*`-%*uE_A^yzFvS~&jG2t#<6{8vp,YH[Og8' );
define( 'NONCE_SALT',       'W<>!Wcao)dIa6JK1nJS[vy!XO$6l_|-3`,Q0~w{X 1{$y$?_)>!*3u&dJ0#lt<&{' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

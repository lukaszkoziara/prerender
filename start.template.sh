export BASIC_AUTH_USERNAME=someuser
export BASIC_AUTH_PASSWORD=somepass
export CACHE_LIFE_TIME=600000
export CACHE_ROOT_DIR=/srv/prerender/prerender_disk_cache
export ALLOWED_DOMAINS=www.someurl.com,someurl.com

/usr/bin/node /srv/prerender/custom_server.js

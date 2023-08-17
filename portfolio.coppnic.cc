server {
	server_name portfolio.coppnic.cc;
	root /var/www/portfolio;
	index index.html;

	error_log /root/logs/portfolio-error.log;

	# Prevent access to hidden files
	location ~* /\.(?!well-known\/) {
		deny all;
	}

	# Prevent access to certain file extensions
	location ~\.(ini|log|conf)$ {
		deny all;
	}

    location / {
          try_files $uri $uri/ =404;
     }

}
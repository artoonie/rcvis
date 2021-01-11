Since Heroku has a read-only filesystem, we need to use this directory to override policy.xml on Heroku.
Then, set MAGICK_CONFIGURE_PATH to load this file with higher precedence.

See also:
https://stackoverflow.com/questions/39425446/imagemagick-change-policy-xml-on-heroku

colors.xml and type.xml are directly copied, unedited.
policy.xml is copied with read|write applied on path.

require 'sprockets/es6'

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end

# Configure Babel
::Sprockets::ES6.configure do |config|
  config.marshal_load({
    modules: 'amd',
    moduleIds: true
  })
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end


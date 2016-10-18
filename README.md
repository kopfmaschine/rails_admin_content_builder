# RailsAdminContentBuilder

[![Build Status](https://travis-ci.org/luizpicolo/rails_admin_content_builder.svg?branch=master)](https://travis-ci.org/luizpicolo/rails_admin_content_builder)
[![Code Climate](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder/badges/gpa.svg)](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder)
[![Test Coverage](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder/badges/coverage.svg)](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder/coverage)
[![Issue Count](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder/badges/issue_count.svg)](https://codeclimate.com/github/luizpicolo/rails_admin_content_builder)

Easy way for create contents using [rails_admin](https://github.com/sferik/rails_admin)

## Preview

![preview](https://raw.githubusercontent.com/luizpicolo/rails_admin_content_builder/master/screenshot/image1.png)

## Requirements

Dependencies

    MiniMagick

Supported ORM

    ActiveRecord

Supported Asset Plugin

    CarrierWave

## Installation

**Test with rails < 5 and TurboLink < 5**

Add this line to your application's Gemfile:

```ruby
gem 'rails_admin'
gem 'rails_admin_content_builder'
```

Run the generator and migrations

    rails g rails_admin_content_builder
    rake db:migrate

Add styles in app/assets/application.scss

```ruby
*= require rails_admin_content_builder
```

## Usage

For custom model, see: [Customizing Model](https://github.com/luizpicolo/rails_admin_content_builder/wiki/Customizing-model)

Include in your controller

```ruby
include RailsAdminContentBuilder::ContentBuilderHelpers
```

Example

```ruby
class PostsController < ApplicationController
  include RailsAdminContentBuilder::ContentBuilderHelpers

  def index
  end

  def show
  end
end
```

```ruby
# Return all objects contents
@contents = all_contents_created

# Return especific object content
@content = find_content_created_by_slug('your-slug')

# Return content
@content = find_content_created_by_slug('your-slug')
@content.content_sanitized
```

In your show content view

```html
<article>
  <h1><%= @content.title %></h1>
  <p>
    <%= @content.written_by %>
  </p>
  <p><%= @content.summary %></p>

<%= @content.content_sanitized %>
</article>
```

## Attributes and Methods

```ruby
# Attributes
"title" : String    
"written_by" : String    
"date_publish" : DateTime    
"content" : Text    
"status" : Boolean           
"slug" : String    

# Methods
content_sanitized : Text
content_builder_images : Object
```

# Demonstration

Content Builder:
[link](https://example-cb-fc.herokuapp.com/admin/rails_admin_content_builder~content_builder/1/content_builder)    
Content:
[link](https://example-cb-fc.herokuapp.com/noticias/general/orem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-aenean-tellus-ante-auctor-ut-facilisis-nec)

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/luizpicolo/rails_admin_content_builder. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

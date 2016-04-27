FactoryGirl.define do
  factory :content_builder, class: RailsAdminContentBuilder::ContentBuilder do
    title { Faker::Name.name }
    date_publish { Time.now }
    status false
  end
end
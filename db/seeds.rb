# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Log.destroy_all
Prompt.destroy_all
User.destroy_all

User.create(
    nickname: 'admin_1',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'abc123'
)
50.times do |i|
    Prompt.create(
        user_id:1,
        title:"Test Prompt #{i}",
        description: "This is a desctirption for Test Prompt #{i}",
        rating: "#{rand(20..100)}%"
    )
    Log.create(
        user_id:1,
        prompt_id:i,
        text:'this should be a textarea not a string lol',
        private:false
    )

end

puts "seeded 1 users, 50 prompts and 50 logs"





# create_table "logs", force: :cascade do |t|
#     t.bigint "prompt_id", null: false
#     t.bigint "user_id", null: false
#     t.string "text"
#     t.boolean "private"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["prompt_id"], name: "index_logs_on_prompt_id"
#     t.index ["user_id"], name: "index_logs_on_user_id"
#   end

#   create_table "prompts", force: :cascade do |t|
#     t.string "title"
#     t.string "description"
#     t.bigint "user_id", null: false
#     t.string "rating"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["user_id"], name: "index_prompts_on_user_id"
#   end
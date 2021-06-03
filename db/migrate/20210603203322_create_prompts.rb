class CreatePrompts < ActiveRecord::Migration[6.1]
  def change
    create_table :prompts do |t|
      t.string :title
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      t.string :rating

      t.timestamps
    end
  end
end

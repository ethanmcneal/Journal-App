class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.belongs_to :prompt, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :text
      t.boolean :private

      t.timestamps
    end
  end
end

class Log < ApplicationRecord
  belongs_to :prompt
  belongs_to :user
end

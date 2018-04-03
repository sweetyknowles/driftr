class Post < ApplicationRecord
  belongs_to :city
 
  # attr_accessible :title :text

  # the content cannot be empty
<<<<<<< HEAD
validates :title, :text :content, :presence =>true
# user is restricted to the content length between 1-200
validates :title, :length => { :minimum => 1 }
validates :title, :length => { :maximum => 200}
#this will not allow the user to duplicate the post.
validates  :title :uniqueness =>true
=======
  validates :title, :text, presence: true
  # user is restricted to the content length between 1-200
  validates :title, length: { minimum: 1 }
  validates :title, length: { maximum: 200}
  #this will not allow the user to duplicate the post.
>>>>>>> d8b1e05650c6bd6cd54e7f60908fd94fde8a43b6
end
  

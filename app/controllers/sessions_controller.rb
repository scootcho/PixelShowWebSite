class SessionsController < ApplicationController
  def new

  end

  def create
    binding.pry
  	user = User.find_by(email:params[:session][:email].downcase)
  	if user && user.authenticate(params[:session][:password])
  		# 使用者存在且密碼正確的話
  		sign_in user
	    redirect_to shows_path
  	else
  		flash[:error] = '錯誤的賬戶或密碼' # Not quite right!
  		render 'new'
  	end
  end

  def destroy
    sign_out
    redirect_to root_path
  end
end

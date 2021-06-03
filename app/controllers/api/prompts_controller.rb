class Api::PromptsController < ApplicationController

    before_action :get_prompt, only: [:show, :destory, :update]

    def index
        prompts = Prompt.all
        render json: prompts
    end

    def show
        render json: @prompt
    end

    def create
        prompts = Prompt.new(prompt_params)
        if prompt.save
            render json: prompt
        else
            render json: {errors: prompt.errors }, message: 'you did something wrong', status: :unprocessable_entity
    end

    def update
        if @prompt.update(prompt_params)
            render json: @prompt
        else
            render json: {errors: prompt.errors }, message: 'you did something wrong', status: :unprocessable_entity
    end

    def destroy
       render json: @prompt.destroy
    end


    private

    def get_prompt
        @prompt = Prompt.find(params[:id])
    end

    def prompt_params
        params.require(:prompt).premit(:title, :description)
    end
end

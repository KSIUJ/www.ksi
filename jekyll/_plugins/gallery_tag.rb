module Jekyll
  class RenderGalleryPhoto < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      Liquid::Template.parse('<div class="col-4"><span class="image fit">{% picture gallery-full ' + @text + ' %}</span></div>').render(context)
    end
  end


  class RenderGalleryBlock < Liquid::Block
    def render(context)
      content = super
      lines = content.strip.split("\n").compact.map(&:strip)
      output = '<div class="box alt"><div class="row gtr-uniform">'
      lines.each do |picture|
        output += '<div><span class="image fit">{% picture gallery ' + picture + ' %}</span></div>'
      end
      output += '</div></div>'
      Liquid::Template.parse(output).render(context)
    end
  end
end

Liquid::Template.register_tag('photo', Jekyll::RenderGalleryPhoto)
Liquid::Template.register_tag('gallery', Jekyll::RenderGalleryBlock)

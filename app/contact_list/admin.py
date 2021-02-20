from django.contrib import admin

# Register your models here.


from .models import ContactListModel


class ContactListAdmin(admin.ModelAdmin):
    list_display = ('id', "name", "surname", "role",
                     "status", "email", )
    list_filter = ("name",)
    list_filter = ("surname",)
    list_per_page = 200


admin.site.register(ContactListModel, ContactListAdmin)
